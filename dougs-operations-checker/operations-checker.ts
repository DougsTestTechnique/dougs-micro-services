import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import log from 'lambda-log';
import { Movement, Balance } from './types';
import { compareMovementsAndBalances } from './utils/compareMovementsAndBalances';

export async function handle(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  try {
    log.info('operations-checker Event', event);
    const data = JSON.parse(event.body || '{}');
    const movements: Movement[] = data.movements[0].movements;
    const balances: Balance[] = data.balances[0].balances;

    if (!movements || !balances) {
      log.error("Error", { type: "MISSING_DATA", movements, balances });
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Movements and balances are required',
        }),
      };
    }

    log.info('Log Movements and Balances', { movements, balances });

    const anomalies = compareMovementsAndBalances(movements, balances);

    return {
      statusCode: 202,
      body: JSON.stringify({
        message: 'Accepted',
        anomalies: anomalies,
      }),
    };
  } catch (err) {
    log.error('Error', { err, event });

    return {
      statusCode: 500,
      body: JSON.stringify({
        status: false,
        err
      }),
    };
  }
}