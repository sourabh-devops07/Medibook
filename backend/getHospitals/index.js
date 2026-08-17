module.exports = async function (context, req) {
    context.log("getHospitals function called");

    const hospitals = [
        {
            hospitalId: "city-hospital-001",
            hospitalName: "City Hospital"
        },
        {
            hospitalId: "apollo-hospital-001",
            hospitalName: "Apollo Hospital"
        }
    ];

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            success: true,
            count: hospitals.length,
            hospitals: hospitals
        }
    };
};