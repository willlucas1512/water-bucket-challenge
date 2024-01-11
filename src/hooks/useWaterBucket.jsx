import { calculateGCD } from "../utils/operations";
import { integerNoNegativeValidator } from "../utils/validations";

export default function useWaterBucket() {
  /**
   * Calculate the solution to the problem
   * @param {Number} bucketACapacity - Bucket X capacity
   * @param {Number} bucketBCapacity - Bucket Y capacity
   * @param {Number} z - Target Z
   * @param {Number} stateBucketA - Target Z
   * @param {Number} stateBucketB - Target Z
   * @param {String} strBucketA - Target Z
   * @param {String} strBucketB - Target Z
   * @param {Number} index - Target Z
   * @param {Array} steps - Target Z
   * @return {Object} Solution reference { hasSolution: Boolean, Error: String }
   */
  const calculate = (
    bucketACapacity,
    bucketBCapacity,
    z,
    stateBucketA,
    stateBucketB,
    strBucketA,
    strBucketB,
    index,
    steps
  ) => {
    if (steps.length === 0)
      steps.push({
        id: crypto.randomUUID(),
        a: 0,
        b: 0,
        action: "Initial State",
      });
    if (stateBucketB == z || stateBucketA == z) {
      steps.push({
        id: crypto.randomUUID(),
        a: stateBucketA,
        b: stateBucketB,
        action: "Solved",
      });

      let aux = { index, steps };
      index = 0;
      steps = [];

      return aux;
    } else {
      if (stateBucketA === 0) {
        index++;
        stateBucketA = bucketACapacity;

        steps.push({
          id: crypto.randomUUID(),
          a: stateBucketA,
          b: stateBucketB,
          action: `Fill bucket ${strBucketA}`,
        });

        return calculate(
          bucketACapacity,
          bucketBCapacity,
          z,
          stateBucketA,
          stateBucketB,
          strBucketA,
          strBucketB,
          index,
          steps
        );
      }

      // Bucket B Vacio
      if (stateBucketB == 0) {
        index++;

        if (stateBucketA <= bucketBCapacity) {
          stateBucketB = stateBucketA;
          stateBucketA = 0;
        } else {
          stateBucketB = bucketBCapacity;
          stateBucketA = stateBucketA - bucketBCapacity;
        }

        steps.push({
          id: crypto.randomUUID(),
          a: stateBucketA,
          b: stateBucketB,
          action: `Transfer bucket ${strBucketA} to bucket ${strBucketB}`,
        });

        return calculate(
          bucketACapacity,
          bucketBCapacity,
          z,
          stateBucketA,
          stateBucketB,
          strBucketA,
          strBucketB,
          index,
          steps
        );
      }

      // Bucket B Lleno
      if (stateBucketB == bucketBCapacity) {
        index++;
        stateBucketB = 0;

        steps.push({
          id: crypto.randomUUID(),
          a: stateBucketA,
          b: stateBucketB,
          action: `Empty bucket ${strBucketB}`,
        });

        return calculate(
          bucketACapacity,
          bucketBCapacity,
          z,
          stateBucketA,
          stateBucketB,
          strBucketA,
          strBucketB,
          index,
          steps
        );
      }

      // Bucket B contiene agua pero no esta lleno
      if (stateBucketB > 0 && stateBucketB < bucketBCapacity) {
        index++;

        if (bucketBCapacity - stateBucketB >= stateBucketA) {
          stateBucketB = stateBucketB + stateBucketA;
          stateBucketA = 0;
        } else {
          stateBucketA = stateBucketA - (bucketBCapacity - stateBucketB);
          stateBucketB = bucketBCapacity;
        }

        steps.push({
          id: crypto.randomUUID(),
          a: stateBucketA,
          b: stateBucketB,
          action: `Transfer bucket ${strBucketA} to bucket ${strBucketB}`,
        });

        return calculate(
          bucketACapacity,
          bucketBCapacity,
          z,
          stateBucketA,
          stateBucketB,
          strBucketA,
          strBucketB,
          index,
          steps
        );
      }
    }
  };

  /**
   * Check if there is a solution for the problem
   * @param {Number} x - Bucket X capacity
   * @param {Number} y - Bucket Y capacity
   * @param {Number} z - Target Z
   * @return {Object} Solution reference { hasSolution: Boolean, Error: String }
   */
  const checkSolution = (x, y, z) => {
    if (
      !integerNoNegativeValidator(x) ||
      !integerNoNegativeValidator(y) ||
      !integerNoNegativeValidator(z)
    )
      return {
        hasSolution: false,
        error:
          "The capacities of X and Y, and the target Z must be non-negative integers.",
      };

    if (x < 1)
      return {
        hasSolution: false,
        error: `capacity of X: ${x} must be greater than 0.`,
      };

    if (y < 1)
      return {
        hasSolution: false,
        error: `capacity of Y: ${y} must be greater than 0.`,
      };

    if (z < 1)
      return {
        hasSolution: false,
        error: `Target Z: ${z} must be greater than 0.`,
      };

    if (x < z && y < z)
      return {
        hasSolution: false,
        error: `Target Z: ${z}, outside of X: ${x} and Y: ${y} capabilities.`,
      };

    const xyGCD = calculateGCD(x, y);
    console.log("xyGCD", xyGCD);
    if (xyGCD > 2)
      return {
        hasSolution: false,
        error: `You cannot create combinations of X: ${x} and Y: ${y} to measure the Z: ${z} amount of water.`,
      };

    return { hasSolution: true, error: "" };
  };

  return {
    calculate,
    checkSolution,
  };
}
