import MarkdownIt from 'markdown-it';

type markdown = {
  mdRender: (context: string) => string;
  getInstance: () => MarkdownIt;
};

const useMarkdown = (): markdown => {
  const md = new MarkdownIt();

  const mdRender = (context: string) => {
    const result = md.render(context);
    return result;
  };

  const getInstance = () => {
    return md;
  };

  return {
    mdRender,
    getInstance,
  };
};

export default useMarkdown;
