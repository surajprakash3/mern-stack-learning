const teacherData = [];

const teachercreate = (t_name, t_code, t_mail) => {
  teacherData.push({ t_name, t_code, t_email });
  return teacherData;
};

module.exports = { teachercreate };
