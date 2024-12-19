import React from 'react';

const CodeBlock = () => {
  return (
    <div className="code-window mt-8 animate-fade-in">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-white">
        <code>
          <span className="text-purple-400">function</span>{" "}
          <span className="text-blue-400">animate</span>() {"{"}
          {"\n"}
          {"  "}wave(title);{"\n"}
          {"  "}wave(titleShadow);{"\n"}
          {"  "}illo.rotate.y += isSpinning ? -0.03 : 0;{"\n"}
          {"  "}t += tStep;{"\n"}
          {"  "}illo.updateRenderGraph();{"\n"}
          {"  "}requestAnimationFrame(animate);{"\n"}
          {"}"}{"\n\n"}
          animate();
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;