# RNMU (React Native modal utility)

RNMU is a small, zero-dependency utility to control modals in React Native apps

<!-- ## Installation

```bash
npm install --save @violice/rnmu
yarn add @violice/rnmu
``` -->

## Usage

```js
import { openModal, closeModal, RNMUOutlet, RNMUProvider } from '@violice/rnmu';

const Example = () => {
  return (
    <RNMUProvider>
       <Pressable
        onPress={() => {
          const modal = openModal(
            <TestModal onClose={() => closeModal(modal)} />
          );
        }}
      >
        <Text>
          Open modal
        </Text>
      </Pressable>
      <SomeContextProvider>
        <Pressable onPress={() => {
          const modal = openModal(
            <TestContextModal onClose={() => closeModal(modal)} />,
            { outletId: 'MY_OUTLET' },
          );
        }}>
          <Text>
            Open modal with access to some context
          </Text>
        </Pressable>
        <RNMUOutlet outletId="MY_OUTLET">
      </SomeContextProvider>
      <RNMUOutlet />
    </RNMUProvider>
  );
};
```

## RoadMap

- [x] Custom events, new API (0.2.0)
- [ ] Connected modals
- [ ] Auto-close
- [ ] Use for toasts example

## License

Licensed under MIT
