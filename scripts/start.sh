#!/bin/bash
echo "🚀 Starting Quantora System..."
python backend/main.py &
python background/worker.py &
wait