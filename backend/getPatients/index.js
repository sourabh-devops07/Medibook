module.exports = async function (context, req) {

    context.log("Fetching patients from Cosmos DB");

    try {

        const patients = context.bindings.patients || [];

        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                success: true,
                count: patients.length,
                patients: patients
            }
        };

    } catch (error) {

        context.log.error("Error fetching patients:", error);

        context.res = {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                success: false,
                message: "Failed to fetch patients",
                error: error.message
            }
        };
    }
};