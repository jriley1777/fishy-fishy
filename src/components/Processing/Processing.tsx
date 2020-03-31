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
    sketch: any,
    p5Props: any
}

const Processing: React.FC<ProcessingTypes> = ({ sketch, p5Props }) => {
    const canvasRef = useRef<any>();
    useEffect(() => {
        canvasRef.current = new p5(
          sketch,
          document.getElementById("P5Container") || undefined
        );
        return () => canvasRef && canvasRef.current!.remove();
    }, [sketch]);

    useEffect(() => {
      canvasRef.current!.props = p5Props;
    }, [p5Props])
    

    return (
      <P5Overlay>
        <P5Container />
      </P5Overlay>
    );
};

export default Processing;