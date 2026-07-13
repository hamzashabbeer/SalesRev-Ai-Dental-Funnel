import React, { useState, useEffect, useRef } from 'react';

const bookings = [
    { name: "Alexander", location: "Austin, TX", time: "2m ago", initial: "A" },
    { name: "David", location: "Miami, FL", time: "5m ago", initial: "D" },
    { name: "Jessica", location: "Denver, CO", time: "1m ago", initial: "J" },
    { name: "Michael", location: "Chicago, IL", time: "4m ago", initial: "M" },
    { name: "Sarah", location: "San Francisco, CA", time: "Just now", initial: "S" },
    { name: "Robert", location: "Atlanta, GA", time: "3m ago", initial: "R" },
    { name: "Emma", location: "Seattle, WA", time: "6m ago", initial: "E" },
    { name: "Marcus", location: "New York, NY", time: "2m ago", initial: "M" }
];

const gradients = [
    'linear-gradient(135deg, #DC2626 0%, #E11D48 100%)',
    'linear-gradient(135deg, #EF4444 0%, #F43F5E 100%)',
    'linear-gradient(135deg, #991B1B 0%, #DC2626 100%)',
    'linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)'
];

export default function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [show, setShow] = useState(false);

    const displayTimeoutRef = useRef(null);
    const nextNotificationTimeoutRef = useRef(null);
    const isHoveredRef = useRef(false);

    // Initialize current booking and start display lifecycle
    useEffect(() => {
        const initialBooking = {
            ...bookings[0],
            gradient: gradients[0]
        };
        setCurrentBooking(initialBooking);

        // First notification appears 6 seconds after page loads/component mounts
        nextNotificationTimeoutRef.current = setTimeout(() => {
            showNotification(0);
        }, 6000);

        return () => {
            clearTimeout(displayTimeoutRef.current);
            clearTimeout(nextNotificationTimeoutRef.current);
        };
    }, []);

    const showNotification = (indexToUse) => {
        if (isHoveredRef.current) return;

        const nextIndex = indexToUse !== undefined ? indexToUse : currentIndex;
        const booking = bookings[nextIndex];
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

        setCurrentBooking({
            ...booking,
            gradient: randomGradient
        });
        setShow(true);

        const newNextIndex = (nextIndex + 1) % bookings.length;
        setCurrentIndex(newNextIndex);

        // Auto hide after 6 seconds
        clearTimeout(displayTimeoutRef.current);
        displayTimeoutRef.current = setTimeout(() => {
            hideNotification(newNextIndex);
        }, 6000);
    };

    const hideNotification = (nextIndex) => {
        setShow(false);

        // Schedule next showing in 12 seconds
        clearTimeout(nextNotificationTimeoutRef.current);
        nextNotificationTimeoutRef.current = setTimeout(() => {
            showNotification(nextIndex);
        }, 12000);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        clearTimeout(displayTimeoutRef.current);
        clearTimeout(nextNotificationTimeoutRef.current);
        setShow(false);

        // Resume notifications in 45 seconds if explicitly dismissed
        const nextIdx = currentIndex;
        nextNotificationTimeoutRef.current = setTimeout(() => {
            showNotification(nextIdx);
        }, 45000);
    };

    const handleMouseEnter = () => {
        isHoveredRef.current = true;
        clearTimeout(displayTimeoutRef.current);
    };

    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        // Hide after 3 seconds of leaving, if it was already showing
        if (show) {
            clearTimeout(displayTimeoutRef.current);
            displayTimeoutRef.current = setTimeout(() => {
                hideNotification(currentIndex);
            }, 3000);
        }
    };

    if (!currentBooking) return null;

    return (
        <div 
            className={`social-proof-popup ${show ? 'show' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="social-proof-avatar" style={{ background: currentBooking.gradient }}>
                <span>{currentBooking.initial}</span>
                <div className="social-proof-pulse"></div>
            </div>
            <div className="social-proof-content">
                <div className="social-proof-title">
                    <span>{currentBooking.name}</span> from <span>{currentBooking.location}</span>
                </div>
                <div className="social-proof-body">
                    <span className="social-proof-action">booked a demo call</span>
                    <span className="social-proof-time">{currentBooking.time}</span>
                </div>
            </div>
            <button 
                className="social-proof-close" 
                onClick={handleClose} 
                aria-label="Close Notification"
            >
                <i className="ph ph-x"></i>
            </button>
        </div>
    );
}
