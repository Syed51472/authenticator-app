module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define("invoice", {
    Cname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemPrice: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  return Invoice;
};
