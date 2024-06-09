'use client';

import React from 'react';
import MyCalendar from '../components/MyCalendar';

export default function CalendarPage() {
    return (
        <div className='py-10 px-auto text-center'>
            <MyCalendar />
            <a href='/' className="border-4 text-bold">Back to Homepage</a>
        </div>
    );
};