import { Citoyen } from "../entity/Citoyen";
import { Vaccin } from "../entity/Vaccin";

export class CitoyenDao {
  private static users: Citoyen[] = [
    new Citoyen("1800467", "Mahdi", "Hamdi", "11118888", "04/05/1999", [
      new Vaccin("J&J", "01/06/2021"),
      new Vaccin("Pfizer", "01/01/2022"),
    ]),
    new Citoyen("1800465", "Ramez", "Ben Aribia", "07499875", "21/06/1999", [
      new Vaccin("J&J", "01/06/2021"),
      new Vaccin("Pfizer", "01/01/2022"),
    ]),
  ];

  public static getUserByNumInscription(
    numInscription: string
  ): Citoyen | undefined {
    return CitoyenDao.users.find(
      (citoyen) => citoyen.numInscription == numInscription
    );
  }
}
