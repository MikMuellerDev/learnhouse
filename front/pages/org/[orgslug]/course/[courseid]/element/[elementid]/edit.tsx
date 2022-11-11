import { default as React, useEffect, useRef } from "react";

import Layout from "../../../../../../../components/ui/Layout";
import { Title } from "../../../../../../../components/ui/styles/Title";
import dynamic from "next/dynamic";
import { AuthContext } from "../../../../../../../components/security/AuthProvider";

const Editor = dynamic(() => import("../../../../../../../components/editor/editor"), {
  ssr: false,
});

// tools

function EditElement() {
  
  
  return (
    <Layout>
      <Title>Edit Page </Title>
      <br />
      <Editor></Editor>
    </Layout>
  );
}

export default EditElement;
