import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type InferGetStaticPaths<T> = T extends () => {
  paths: {
    params: infer R;
  }[];
}
  ? {
      params?: R | undefined;
    }
  : never;

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>>;
