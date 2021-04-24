import React, { useState } from 'react';
import { Card, Form, Input } from 'antd';

export default function AnalysisForm() {
  return (
    <Card>
      <Form>
        <Form.Item name='address' label='Address'>
          <Input />
        </Form.Item>
        <Form.Item name='propertyValue' label='Property Value'>
          <Input />
        </Form.Item>
        <Form.Item name='closingCost' label='Closing Cost'>
          <Input />
        </Form.Item>
        <Form.Item name='rentalIncome' label='Rental Income'>
          <Input />
        </Form.Item>
        <Form.Item name='expenses' label='Expenses'>
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
}
