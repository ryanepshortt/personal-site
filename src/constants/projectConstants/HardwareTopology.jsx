import React from "react";
import serverRoom from "../../assets/avifs/serverRoom.avif";
import tcl from "../../assets/avifs/tcl.avif";
import jenkins from "../../assets/avifs/jenkins.avif";
import bash from "../../assets/avifs/bash.avif";

export default {
  titleInfo: {
    title: "Hardware Topology Diagnostics Tool (Ciena)",
  },
  body: () => (
    <>
      <p>
        Creator of a set of utilities allowing automation testing teams at Ciena
        to gather and email out in depth diagnostics on targeted hardware
        configurations in the lab. The tool would return values such as the
        number of CRC errors, packets lost and missing hardware nodes.
      </p>
      <p>
        The tool was integrated into our Jenkins Pipeline, where users could
        queue it to run before their test suites to ensure that the hardware
        topology under test would not produce unforeseen errors. This
        application would also halt any future tests on hardware topologies that
        could not meet sufficient health criteria.
      </p>
    </>
  ),
  imageInfo: {
    img: serverRoom,
    alt: "Server Room",
  },
  techList: [
    {
      img: tcl,
      tooltip: "Tcl",
    },
    {
      img: bash,
      tooltip: "Unix Shell",
    },
    {
      img: jenkins,
      tooltip: "Jenkins",
    },
  ],
};
