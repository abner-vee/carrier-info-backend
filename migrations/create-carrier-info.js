'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.sequelize.query(`
      CREATE TABLE carrier_info (
          created_dt TIMESTAMPTZ,
          data_source_modified_dt TIMESTAMPTZ,
          entity_type VARCHAR(50),
          operating_status VARCHAR(100),
          legal_name VARCHAR(255),
          dba_name VARCHAR(255),
          physical_address VARCHAR(255),
          p_street VARCHAR(255),
          p_city VARCHAR(100),
          p_state VARCHAR(10),
          p_zip_code VARCHAR(20),
          phone VARCHAR(20),
          mailing_address VARCHAR(255),
          m_street VARCHAR(255),
          m_city VARCHAR(100),
          m_state VARCHAR(10),
          m_zip_code VARCHAR(20),
          usdot_number BIGINT,
          mc_mx_ff_number VARCHAR(50),
          power_units NUMERIC(10, 2),
          mcs_150_form_date DATE,
          out_of_service_date DATE,
          state_carrier_id_number VARCHAR(50),
          duns_number VARCHAR(50),
          drivers NUMERIC(10, 2),
          mcs_150_mileage_year VARCHAR(50),
          id BIGINT PRIMARY KEY,
          credit_score NUMERIC(10, 2),
          record_status VARCHAR(50)
      );
    `);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS carrier_info;
    `);
    }
};
