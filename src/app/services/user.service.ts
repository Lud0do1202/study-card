import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Device, DeviceId } from '@capacitor/device';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /* --------------------------------- Keys --------------------------------- */
  private _userID = 'userID';

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient) {}

  /* --------------------------------- Auth --------------------------------- */
  async auth(): Promise<Observable<void>> {
    // Get the device uuid
    return this._getDeviceID().then((deviceID: DeviceId) => {
      // Get ID
      const id = deviceID.identifier;

      // Set the userID
      this.setUserID(id);

      // Sign up if not register
      return this.http.post<void>(environment.api.auth, { id });
    });
  }

  /* ------------------------------- Device ID ------------------------------ */
  private async _getDeviceID(): Promise<DeviceId> {
    return await Device.getId();
  }

  /* -------------------------------- User ID ------------------------------- */
  getUserID(): string | null {
    return localStorage.getItem(this._userID);
  }

  setUserID(id: string): void {
    localStorage.setItem(this._userID, id);
  }

  clearUserID(): void {
    localStorage.removeItem(this._userID);
  }
}
