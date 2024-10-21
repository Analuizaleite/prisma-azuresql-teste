const prisma = require('../shared/prisma');
const handleError = require('../shared/error');

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    await prisma.employee.delete({
      where: {
        employee_id: String(id),
      },
    });

    return {
      status: 204,
    };
  } catch (error) {
    context.log('Error to delete an Employee.');
    context.log(error);
    return handleError(500, error);
  }
};