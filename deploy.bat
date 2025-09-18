@echo off
REM QuantCompt Waitlist Deployment Script for Windows

echo 🚀 Starting QuantCompt Waitlist deployment...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Make sure you're in the frontend_new_waitlist directory.
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ npm install failed!
    pause
    exit /b 1
)

REM Build the project
echo 🔨 Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Check for errors above.
    pause
    exit /b 1
)

REM Check if build directory exists
if not exist "build" (
    echo ❌ Build directory not found!
    pause
    exit /b 1
)

echo ✅ Build successful!

REM Deploy to Vercel
echo 🌐 Deploying to Vercel...
call npx vercel --prod

echo 🎉 Deployment complete!
echo Your site should be live at your Vercel domain.
pause
