import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

const CODE_INIT = 'console.log("Hello World!")';

type useMonaco = {
  createMonacoInstance: (dom: HTMLElement, code?: string) => void;
  getMonacoInstance: () => monaco.editor.IStandaloneCodeEditor;
  destoryCodeEditor: () => void;
};

const useMonaco = (): useMonaco => {
  let monacoInstance: monaco.editor.IStandaloneCodeEditor;

  // 根据 ref 创建 monaco 实例
  const createMonacoInstance = (dom: HTMLElement, code: string = CODE_INIT) => {
    monacoInstance = monaco.editor.create(dom, {
      value: 'console.log("hello,world")',
      language: 'javascript',
      automaticLayout: true,
    });
  };

  // 获取实例
  const getMonacoInstance = () => {
    return monacoInstance;
  };

  // 销毁实例
  const destoryCodeEditor = () => {
    if (monacoInstance) {
      monacoInstance.dispose();
    }
  };

  return {
    createMonacoInstance,
    getMonacoInstance,
    destoryCodeEditor,
  };
};

export default useMonaco;
