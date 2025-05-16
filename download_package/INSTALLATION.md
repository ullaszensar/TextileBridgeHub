# TexBridge Website Installation Guide

This document provides step-by-step instructions for installing the TexBridge website on a Windows server.

## Option 1: Installing the Static Website Only (Easiest)

If you just want to host the static website files without the backend:

1. **Extract the Files**:
   - Navigate to `dist/public` directory
   - Copy all contents of this folder to your web server's home directory (e.g., `C:\inetpub\wwwroot` for IIS)

2. **Configure Your Web Server**:
   - For IIS:
     - Open Internet Information Services (IIS) Manager
     - Create a new website or use an existing one
     - Set the physical path to where you copied the files
     - Bind the site to your domain (texbridge.in)
     - Make sure the website has read permissions for the IIS user

3. **URL Rewriting Setup** (Required for client-side routing):
   - Install URL Rewrite module for IIS if not already installed
   - Create a `web.config` file in your website root with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Option 2: Installing with Node.js Backend

If you want to run the complete application with the Node.js backend:

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/) (version 20.x recommended)
   - Make sure npm is included in the installation

2. **Extract All Files**:
   - Copy the entire content of the download package to your server
   - Place it in a dedicated directory (e.g., `C:\texbridge`)

3. **Install Dependencies**:
   - Open Command Prompt as Administrator
   - Navigate to your project directory:
     ```
     cd C:\texbridge
     ```
   - Install dependencies:
     ```
     npm install
     ```

4. **Build the Project**:
   - In the same Command Prompt window:
     ```
     npm run build
     ```

5. **Running the Application**:
   - For testing, run:
     ```
     node dist/index.js
     ```
   - The website should be available at http://localhost:5000

6. **Setting Up as a Windows Service** (recommended for production):
   - Install a service manager like pm2:
     ```
     npm install -g pm2
     pm2 install pm2-windows-startup
     pm2 start dist/index.js --name texbridge
     pm2 save
     ```

7. **Configure Reverse Proxy** (optional but recommended):
   - Install and configure IIS with URL Rewrite and Application Request Routing
   - Set up a reverse proxy to forward requests to your Node.js application

## Domain Setup

1. **DNS Configuration**:
   - Point your domain (texbridge.in) to your server's IP address
   - Create an A record in your DNS settings:
     - Host: @ (or www)
     - Points to: Your server's public IP

2. **HTTPS Setup** (Recommended):
   - Install an SSL certificate for your domain
   - For IIS, you can use Let's Encrypt with the ACME plugin

## Troubleshooting

- **404 Errors on Page Refresh**: Make sure the URL rewriting is properly configured
- **Cannot Connect to Website**: Check if your firewall allows connections on port 80/443
- **Node.js Not Starting**: Verify Node.js installation and check logs for errors

For additional support, contact the developer.