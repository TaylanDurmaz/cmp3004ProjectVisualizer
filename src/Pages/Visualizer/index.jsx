import React, { useState, useRef, useEffect } from "react";
import { Slider, Row, Col, Button, message, Input } from "antd";
import {
  CaretRightOutlined,
  PauseOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { useTheme } from "styled-components";
import Card from "../../Components/Card";
import Text from "../../Components/Text";
import VisualizerStyles from "./styles";
import { initialCoordinates, initialTour } from "./COORDINATES";

// NO TIME FOR SPLITTING
// edit: REGRET

const Visualizer = () => {
  const canvasRef = useRef();
  const containerRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [speed, setSpeed] = useState(1);
  const [dotSize, setDotsize] = useState(5);
  const [currentIdx, setCurrentIdx] = useState(0);

  const [coordinatesVal, setCoordinatesVal] = useState(initialCoordinates);
  const [tour, setTour] = useState(initialTour);
  const [isRunning, setIsRunning] = useState(false);
  const theme = useTheme();

  // console.log(coordinatesVal.split("\n"));

  const getCoordinates = () => {
    const arr = coordinatesVal.split("\n");
    const coordinates = arr.reduce((prev, line) => {
      let newCoordinates = line.split(" ").filter((n) => n.length);
      newCoordinates = [
        parseInt(newCoordinates[0]),
        parseInt(newCoordinates[1]),
      ];
      if (newCoordinates.length) prev.push(newCoordinates);

      return prev;
    }, []);
    return coordinates;
  };
  const getTour = () => {
    return tour
      .split("\n")
      .map((n) => parseInt(n))
      .filter((n) => Number.isInteger(n));
  };

  const getMaxCoordinates = () => {
    const coordinates = getCoordinates();
    let maxWidth = 0;
    let maxHeight = 0;

    coordinates.forEach(([x, y]) => {
      if (x > maxWidth) maxWidth = x;
      if (y > maxHeight) maxHeight = y;
    });

    return { maxWidth, maxHeight };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, width + 10, height + 10);
  };

  const drawCoordinates = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const coordinates = getCoordinates();
    const { maxWidth, maxHeight } = getMaxCoordinates();
    const currentWidth = containerRef.current.getBoundingClientRect().width;
    const currentHeight = containerRef.current.getBoundingClientRect().height;
    const ratioWidth = maxWidth / (currentWidth - 4 * 5);
    const ratioHeight = maxHeight / (currentHeight - 4 * 5);

    coordinates.forEach((coordinate) => {
      context.beginPath();
      context.arc(
        5 + coordinate[0] / ratioWidth,
        currentHeight - (coordinate[1] / ratioHeight + 2 * 5),
        dotSize,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = theme.main.primaryColor;
      context.fill();
    });
  };

  const drawLines = (doNext) => {
    if (currentIdx && currentIdx < getTour().length) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const coordinates = getCoordinates();
      const { maxWidth, maxHeight } = getMaxCoordinates();
      const currentWidth = containerRef.current.getBoundingClientRect().width;
      const currentHeight = containerRef.current.getBoundingClientRect().height;
      const ratioWidth = maxWidth / (currentWidth - 4 * 5);
      const ratioHeight = maxHeight / (currentHeight - 4 * 5);
      const route = getTour();

      for (let i = 1; i <= currentIdx; i++) {
        if (!coordinates[route[i - 1] - 1] || !coordinates[route[i] - 1])
          message.error("Something wrong with indexes");
        else {
          const [x1, y1] = coordinates[route[i - 1] - 1];
          const [x2, y2] = coordinates[route[i] - 1];
          context.beginPath();
          context.strokeStyle = theme.main.secondaryColor;

          context.lineWidth = 2;
          context.moveTo(
            5 + x1 / ratioWidth,
            currentHeight - (y1 / ratioHeight + 2 * 5)
          );
          context.lineTo(
            5 + x2 / ratioWidth,
            currentHeight - (y2 / ratioHeight + 2 * 5)
          );
          context.stroke();
        }
      }

      if (isRunning && currentIdx < getTour().length - 1) {
        if (doNext)
          setTimeout(() => {
            setCurrentIdx((prev) => prev + 1);
          }, 1000 / speed);
      } else setIsRunning(false);
    }
  };

  const drawCanvas = (doNext = false) => {
    clearCanvas();
    drawLines(doNext);
    drawCoordinates();
  };

  const handleResize = () => {
    setWidth(containerRef.current.getBoundingClientRect().width);
    setHeight(containerRef.current.getBoundingClientRect().height);
  };

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.getBoundingClientRect().width);
      setHeight(containerRef.current.getBoundingClientRect().height);

      window.addEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      handleResize();
      drawCanvas();
    }
  }, [canvasRef.current]);

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas(true);
    }
  }, [width, height, currentIdx, coordinatesVal]);

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas();
    }
  }, [dotSize]);

  useEffect(() => {
    if (isRunning) setCurrentIdx((prev) => prev + 1);
  }, [isRunning]);

  return (
    <VisualizerStyles>
      <Row justify="center">
        <Col xs={24} md={8}>
          <Card>
            <div ref={containerRef}>
              <canvas
                ref={canvasRef}
                width={width}
                height={width}
                preserveAspectRatio="none"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <Row type="flex" align="top">
        <Col xs={24} md={12}>
          <Card>
            <Row type="flex" className="input-container">
              <Col xs={24} md={8}>
                <Text color="primary" bold>
                  (1-indexed) Tour:
                </Text>
              </Col>
              <Col xs={24} md={16}>
                <Input.TextArea
                  disabled={isRunning}
                  placeholder="Separate values by new lines"
                  value={tour}
                  onChange={(e) => setTour(e.target.value)}
                  rows={6}
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Row type="flex" justify="center">
              <Button
                icon={isRunning ? <PauseOutlined /> : <CaretRightOutlined />}
                type={isRunning ? "default" : "primary"}
                disabled={currentIdx >= getTour().length - 1}
                onClick={() => setIsRunning((prev) => !prev)}
                style={{ marginRight: 5 }}
              >
                {isRunning ? "Stop" : "Start"}
              </Button>
              <Button
                icon={<RedoOutlined />}
                type={currentIdx === 0 ? "default" : "primary"}
                onClick={() => setCurrentIdx(0)}
              >
                Reset
              </Button>
            </Row>
            <Row type="flex">
              <Col xs={6} md={4}>
                <Text color="primary" bold>
                  Speed:
                </Text>
              </Col>
              <Col xs={18} md={20}>
                <Slider
                  onChange={(val) => setSpeed(val)}
                  value={speed}
                  min={1}
                  max={20}
                />
              </Col>
            </Row>

            <Row type="flex">
              <Col xs={6} md={4}>
                <Text color="primary" bold>
                  Dot size:
                </Text>
              </Col>
              <Col xs={18} md={20}>
                <Slider
                  marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
                  onChange={(val) => setDotsize(val)}
                  value={dotSize}
                  min={1}
                  max={5}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </VisualizerStyles>
  );
};

export default Visualizer;
