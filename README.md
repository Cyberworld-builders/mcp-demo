# MCP Rapid Viable Demo
Demonstrating a simple example of Anthropic's MCP protocol usage.

![Image](https://github.com/user-attachments/assets/5187a432-8a4d-45f1-99e6-e23f784ce020)


**1. Downloading and installing the Claude Desktop App**
Downloaded and installed Claude Desktop App for an MCP client. I'm on Windows 11, with WSL2. (*Not sure if that matters*)

**2. Initializing the Node.js project**

```bash
npm init -y
```

**3. Installing the dependencies**

```bash
# Install the dependencies
npm install @modelcontextprotocol/sdk zod typescript @types/node

# Initialize TypeScript
npx tsc --init
```

**4. Create an index.ts file**

```bash
touch index.ts
```

**5. Compile and run the TypeScript code**

```bash
# Compile the TypeScript code
npx tsc

# Run the compiled code
node index.js
```



