const codes = [
  'diskutil info /Volumes/ever',
  'Device Node:    /dev/disk2s1',
  'hdiutil eject /Volumes/ever/',
  'sudo mkdir /Volumes/ever',
  'sudo mount_ntfs -o rw,nobrowse /dev/disk2s1 /Volumes/ever/',
  'sudo umount /Volumes/ever/',

];
const code = {
  codes,
};

export default code;
