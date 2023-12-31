 #!/bin/zsh
declare -a simulators=("F7C013EB-8176-4762-A8D7-67299DECA20A" "EC1BF74B-D333-469B-8E2B-6A4765630570" "5621317B-9029-4136-A418-23498F08A7F2" )
echo "STARTED"
open -a Simulator
wait_time=1
for i in "${simulators[@]}"
do
    echo "Boot $i"
    xcrun simctl boot $i
    sleep $wait_time
    echo "Install Expo $i"
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.29.6.tar.app
    sleep $wait_time
    echo "Lauch Expo $i"
    xcrun simctl openurl $i exp://192.168.1.145:8081
    sleep $wait_time
done
echo "FINISHED"
