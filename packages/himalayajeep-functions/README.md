# Himalayajeep functions

himalayajeep-functions (node operation)



# Api reference

# Internal

<details><summary>Show internal (11)</summary>
  
  # driverLogin()

login form for the driver to login


| Input      |    |    |
| ---------- | -- | -- |
| emailOrPhone | string |  |,| password | string |  |
| **Output** |    |    |



## driverSignup()

Driver signup


| Input      |    |    |
| ---------- | -- | -- |
| driverInfo | `SignupJeepType` |  |
| **Output** |    |    |



## earthDistance()

/**
 * returns the distance between two places (not very precise but it's very efficient)
 */


| Input      |    |    |
| ---------- | -- | -- |
| lat1 | number |  |,| long1 | number |  |,| lat2 | number |  |,| long2 | number |  |,| response (optional) | m / km |  |
| **Output** |    |    |



## getMyJeep()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |
| **Output** |    |    |



## getPublicJeeps()

| Input      |    |    |
| ---------- | -- | -- |
| position (optional) | `Position` |  |
| **Output** |    |    |



## updateMyProfile()

| Input      |    |    |
| ---------- | -- | -- |
| loginToken | string |  |,| myJeep | { citizenshipImage?: `BackendAsset`, <br />driverLicenseImage?: `BackendAsset`, <br />amountSeatsLeft: number, <br />amountLuggageUnitsLeft: number, <br />note: string, <br />locationsCalculated?: `LocationType`[], <br />name: string, <br />email?: string, <br />phone?: string, <br /> } |  |
| **Output** |    |    |



## 📄 driverLogin (exported const)

login form for the driver to login


## 📄 driverSignup (exported const)

Driver signup


## 📄 getMyJeep (exported const)

## 📄 getPublicJeeps (exported const)

## 📄 updateMyProfile (exported const)

  </details>

