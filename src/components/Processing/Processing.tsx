import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";

const P5Overlay = styled.div.attrs({
    className: 'P5Overlay'
})`
    width: 100%;
`;

const P5Container = styled.div.attrs({
  id: "P5Container"
})`
  width: 100%;
`;

interface ProcessingTypes {
    sketch: any
}

const Processing: React.FC<ProcessingTypes> = ({ sketch }) => {
    const canvasRef: any = useRef();

    useEffect(() => {
        canvasRef.current = new p5(
          sketch,
          document.getElementById("P5Container") || undefined
        );
        return () => canvasRef && canvasRef.current.remove();
    }, [sketch]);
    

    return (
      <P5Overlay>
        <P5Container />
      </P5Overlay>
    );
};

export default Processing;