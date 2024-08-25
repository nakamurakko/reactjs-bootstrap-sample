/**
 * サンプルサービス。
 */
export const SampleService = {

  /**
   * 指定秒数待機する。
   * @param {number} milliseconds
   */
  sleep: async (milliseconds) => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(null), milliseconds);
    });
  }

};
