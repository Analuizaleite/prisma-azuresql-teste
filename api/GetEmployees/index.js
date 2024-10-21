const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });

    return {
      status: 200,
      body: employees,
    };
  } catch (error) {
    context.log('Error to list all the Employees.');
    context.log(error);
    return handleError(500, error);
  }
};