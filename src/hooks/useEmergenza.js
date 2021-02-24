import { useEmergenzes } from "./useEmergenzes"

export default function useEmergenza({ byId }) {
  const { emergenza } = useEmergenzes()

  const emergenzaUnica = emergenza.find(({ Regione } = {}) => Regione === byId)

  return {
    emergenzaUnica,
  }
}
