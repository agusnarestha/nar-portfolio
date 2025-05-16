import React from "react";
import CodeBlock from "@/components/CodeBlock";

const generateId = (text: string) => {
  return text.toLowerCase().replace(/[^\w]+/g, "-");
};

export const MDXComponents = {
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
    const { children, ...rest } = props;
    const child = React.Children.only(children) as React.ReactElement;
    const { className, children: code } = child.props;
    const language = className?.replace("language-", "") || "text";

    return <CodeBlock language={language} value={code as string} {...rest} />;
  },
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h1
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h1>
    );
  },
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h2
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h2>
    );
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h3
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h3>
    );
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h4
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h4>
    );
  },
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h5
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h5>
    );
  },
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(props.children as string);
    return (
      <h6
        {...props}
        id={id}
        className={`scroll-mt-24 ${props.className || ""}`}
      >
        {props.children}
      </h6>
    );
  },
};
