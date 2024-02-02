export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Page2 = "page2",
  ContactUS = "contactus",
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassesType {
  name: string
  description?: string
  image: string
}
