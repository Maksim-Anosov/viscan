"use client";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";
import { useServerInsertedHTML } from "next/navigation";

export const AntdRegistry = ({ children }: PropsWithChildren) => {
  const cache = createCache();

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache) }}
    />
  ));

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider theme={{ token: { colorPrimary: "#1890ff" } }}>
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};
