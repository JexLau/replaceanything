"use client";
import React, { useState } from 'react';
import { Container } from '../Container';

export function Replace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // 这里添加处理搜索逻辑
    // 比如发送请求到后端或API
    // 以及处理返回的数据
  };

  return (
    <div style={{ width: '100%', height: '1300px' }}>
      <iframe src="https://modelscope-replaceanything.hf.space/?__theme=light" height="1300px%" width="100%"></iframe>
    </div>

  );
}
