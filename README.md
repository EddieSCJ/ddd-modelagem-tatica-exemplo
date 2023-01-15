# DDD - Modelagem Tática - Exemplo

## Setting up project
You shall install some dependencies, copy the commands below.

```bash
npm install typescript --save-dev

## Now init your TS project with
npx tsc --init

## Create your code and compile your project to see if is everything ok
npx tsc
```

### Optional
Install tslint to clear your project

```bash
npm install tslint --save-dev

## Now init your tslint project with
npx tslint --init
```

## Installing Jest

```bash
npm install jest @types/jest ts-node --save-dev

npm i --save-dev @swc/jest @swc/cli @swc/core
```
### Starting Jest Project 
```bash
npx jest --init
```

And add this to your [jest.config.ts](jest.config.ts)
```
transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
}
```

### Running your tests
```bash
npm test
```