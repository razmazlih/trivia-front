"use client";

import { Button } from "@heroui/react";

const ShareButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap">
        <Button className="text-white" color="primary">Share on Facebook</Button>
        <Button className="text-white" color="primary">Share on Twitter</Button>
        <Button className="text-white" color="primary">Share on Instagram</Button>
    </div>
  )
}

export default ShareButtons