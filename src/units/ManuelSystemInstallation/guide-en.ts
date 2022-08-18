export const guideEn = [
  {
    title: 'Manual Installation Guide',
    altTitle:
      'This guide will show you how to install (only for api integration)',
    description:
      'When making a request to the Installation endpoint, you must pass the step number in number type and the required dto type for the relevant step. Only 1 step at a time is valid. Do not try to perform 2 steps at the same time. Because the steps are connected to each other as a chain, it should be done using the data returned as a result of the transaction, respectively.',
    content: `
      STEP 1: USER REGISTRATION PROCESS USERDTO WAITS STEP NUMBER 1,
      STEP 2: USER CONTRACT TYPE DESCRIPTION CONTRACTTYPEDTO BURNERS STEP NUMBER 2,
      STEP 3: USER CONTRACT DEFINITION USERCONTRACTDTO STEP NUMBER 3,
      STEP 4: USER SUBSCRIPTION AGREEMENT DEFINITION SUBRCRIPTIONDTO WAIT STEP NUMBER 4,
      STEP 5: USER SIM CARD DEFINITION SIMCARDDTO WAIT STEP NUMBER 5,
      STEP 6: USER MODEM IMEI IDENTIFICATION MODEMIMEIDTO STEP NUMBER 6,
      STEP 8: USER GATEWAY DESCRIPTION GATEWAYDTO WAITING STEP NUMBER 8,
      STEP 9: USER GATEWAYFIELD DESCRIPTION GATEWAYFIELDDTO WAIT STEP NUMBER 9,
      STEP 10: USER WORKGROUP DEFINITION WORKGROUPDTO WAITING STEP NUMBER 10,
      STEP 11: USER SENSORCARD IDENTIFICATION SENSORCARDDTO STEP NUMBER 11,
      STEP 12: USER PUMP DESCRIPTION PUMPCARDDTO BURNERS STEP NUMBER 12,
      STEP 13: USER VALVE BOARD DESCRIPTION VALVECARDDTO BURNERS STEP NUMBER 13,
      `,
    warning:
      'EVERY STEP SENT OTHER THAN THESE STEP NUMBERS WILL GIVE AN ERRORS.!',
  },
];
