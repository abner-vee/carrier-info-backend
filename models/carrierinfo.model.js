'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CarrierInfo extends Model {
        static associate(models) {
            // Define associations here if needed
        }
    }

    CarrierInfo.init({
        created_dt: {
            type: DataTypes.DATE,
        },
        data_source_modified_dt: {
            type: DataTypes.DATE,
        },
        entity_type: {
            type: DataTypes.STRING(50),
        },
        operating_status: {
            type: DataTypes.STRING(100),
        },
        legal_name: {
            type: DataTypes.STRING(255),
        },
        dba_name: {
            type: DataTypes.STRING(255),
        },
        physical_address: {
            type: DataTypes.STRING(255),
        },
        p_street: {
            type: DataTypes.STRING(255),
        },
        p_city: {
            type: DataTypes.STRING(100),
        },
        p_state: {
            type: DataTypes.STRING(10),
        },
        p_zip_code: {
            type: DataTypes.STRING(20),
        },
        phone: {
            type: DataTypes.STRING(20),
        },
        mailing_address: {
            type: DataTypes.STRING(255),
        },
        m_street: {
            type: DataTypes.STRING(255),
        },
        m_city: {
            type: DataTypes.STRING(100),
        },
        m_state: {
            type: DataTypes.STRING(10),
        },
        m_zip_code: {
            type: DataTypes.STRING(20),
        },
        usdot_number: {
            type: DataTypes.BIGINT,
        },
        mc_mx_ff_number: {
            type: DataTypes.STRING(50),
        },
        power_units: {
            type: DataTypes.DECIMAL(10, 2),
        },
        mcs_150_form_date: {
            type: DataTypes.DATE,
        },
        out_of_service_date: {
            type: DataTypes.DATE,
        },
        state_carrier_id_number: {
            type: DataTypes.STRING(50),
        },
        duns_number: {
            type: DataTypes.STRING(50),
        },
        drivers: {
            type: DataTypes.DECIMAL(10, 2),
        },
        mcs_150_mileage_year: {
            type: DataTypes.STRING(50),
        },
        credit_score: {
            type: DataTypes.DECIMAL(10, 2),
        },
        record_status: {
            type: DataTypes.STRING(50),
        },
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true, // Enable auto-increment if applicable
        }
    }, {
        sequelize,
        modelName: 'CarrierInfo',
        tableName: 'carrier_info', // Specify table name if different from model name
        timestamps: false, // Disable timestamps if the table doesn't have `createdAt` and `updatedAt`
    });

    return CarrierInfo;
};
