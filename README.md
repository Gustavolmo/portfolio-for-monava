# INCOMPLETE READ ME (IN PROGRESS)

## How to use

1. Initialize a new window object instance as early as possible:

```tsx
const someWindow = createWindowStore('some-id')
const anotherWindow = createWindowStore('another-id')
// The return is a regular zustandStore, and createWindowStore is a factory-like function
```

2. Wrap your windows around the WorkspaceLayout.
3. Pass the const from createWindowStore() to your window:

```tsx
//HelloWorld.tsx
<WorkspaceLayout>

  <WindowLayout useAppStore={someWindow}>
    <div>Hello World</div>
    <div>In here I can write anything</div>
  </WindowLayout>

  <WindowLayout useAppStore={anotherWindow}>
    <div>I am another window</div>
    <div>In here I can write anything</div>
  </WindowLayout>

<WorkspaceLayout>

//Place the button controlling the window wherever you want
<WindowButton useAppStore={someWindow}>
  <p>CLICK ME</p> // I control the "someWindow"
</WindowButton>;

<WindowButton useAppStore={anotherWindow}>
  <p>CLICK ME</p> // I control the "anotherWindow"
</WindowButton>
```

4. You can also access the window object via the return from createWindowStore,
   or with the windowRegistry by referencing it by ID

```tsx
const someWindow = createWindowStore('some-id')

/* LIKE THIS */
const { someWindowProperty } = someWindow()
/* OR */
const { someWindowProperty } = windowRegistry['some-id']()
```
