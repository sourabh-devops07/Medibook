module.exports = async function (context, req) {

    context.log("Fetching appointments from doctors container");

    try {

        const appointments = context.bindings.appointments || [];

        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                success: true,
                count: appointments.length,
                appointments: appointments
            }
        };

    } catch (error) {

        context.log.error("Error fetching appointments:", error);

        context.res = {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                success: false,
                message: "Failed to fetch appointments",
                error: error.message
            }
        };
    }
};