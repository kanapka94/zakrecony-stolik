export type InferGetStaticPaths<T> = T extends () => {
  paths: {
    params: infer R;
  }[];
}
  ? {
      params?: R | undefined;
    }
  : never;
