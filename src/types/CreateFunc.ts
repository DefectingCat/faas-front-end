export type State = {
  createForm: {
    userId: string | null;
    funcName: string;
    timeout: number;
    funContext: string;
  };

  createRules: {
    userId: {
      required: boolean;
      trigger: string;
    }[];
    funcName: {
      required: boolean;
      message: string;
      trigger: string;
    }[];
    timeout: {
      required: boolean;
      trigger: string;
    }[];
  };
};
