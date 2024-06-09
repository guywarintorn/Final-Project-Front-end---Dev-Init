'use client';

import React from 'react';
import MyCalendar from '../components/MyCalendar';

export default function CalendarPage() {
    return (
        <div className='py-10 px-auto text-center'>
            <MyCalendar />
            <a href='/' className="text-white text-bold bg-slate-700 hover:bg-slate-900">Back to Homepage</a>
        </div>
    );
};