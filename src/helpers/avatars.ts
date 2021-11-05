export const getUserAvatar = (
  name: string,
  age: string,
  locationId: string
): string => {
  return `https://avatars.dicebear.com/api/human/${name + age + locationId}.svg`
}
