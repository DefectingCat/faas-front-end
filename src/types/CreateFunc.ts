export type State = {
  createForm: {
    userId: string | null;
    funcName: string;
    timeout: number;
    funContext: string;
  };
  createRules: {
    funcName: {
      required: boolean;
      message: string;
      trigger: string;
    }[];
  };
};
