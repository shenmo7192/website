import React,{useState,useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import file from './md/chapter_2.md';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import MarkdownNavbar from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
export default function Doc() {
  const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
};
  const [markdown, setMarkdown] = useState("");
  const [height , setheight] = useState(0);
  function handleScroll(){
    setheight(window.pageYOffset);
    console.log(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll,true);
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
    return () => {
      window.removeEventListener('scroll', handleScroll,true);
    }
  }, []);

  return (
    <div className="App" style={{marginTop:70}}>
    <div style={{float:"left",width:"60%",marginLeft:"20%"}}>
      <ReactMarkdown 
      rehypePlugins={[rehypeKatex]}
      components={components} remarkPlugins={[gfm,remarkMath]} children={markdown} />

    </div>
      <div  style={{float:'right',width:"20%", position:"absolute",overflow:"scroll",height:"90%",marginTop:{height}}}>
        <MarkdownNavbar source={markdown} />
      </div>
    </div>
  );
}
