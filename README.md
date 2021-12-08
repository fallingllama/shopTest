# Test

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* `node >= 16.10.x`
* `yarn >= 1.22.x`
* a working iOS simulator (Xcode with accepted license agreement)
* a working android simulator

### Environment setup

Make sure you thoroughly follow the instructions for setting up a working Android Studio & Xcode environment: 
`https://reactnative.dev/docs/environment-setup`

### Installation

1. Clone the repo
   ```sh
   git clone [this repo]
   ```
2. Install dependencies
   ```js
   yarn
   ```
3. M1 Macs - Install ffi + cocoapods using rosetta BEFORE running step 4
   ```sh
   sudo arch -x86_64 gem install ffi
   sudo arch -x86_64 gem install cocoapods
   ```
4. Install cocoapods
   ```sh
   npx pod-install ios
   ```

<!-- USAGE EXAMPLES -->
## Usage

Launch iOS app in simulator: 
```sh
yarn ios
```

Launch Android app in simulator: 
```sh
yarn android
```
