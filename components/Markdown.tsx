import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { MarkdownResult } from '../types/utils';

export const Markdown = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ target, href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }

          if (target === '_blank') {
            return <a {...props} rel="noopener noreferrer"></a>;
          }

          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    />
  );
};
