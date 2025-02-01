import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {
  ACCOUNTPROFILELINK,
  PASSWORDUPDATELINK,
  PASSWORDVERIFICATIONLINK,
  EMAILUPDATELINK,
  EMAILVERIFICATIONLINK,
  PROFILEIMAGEUPDATELINK,
} from '../../constants';
import { Observable } from 'rxjs';
import { AccountUpdateResponseDto } from 'src/app/dto/account/account-update-response.dto';
import { AccountUpdateRequestDto } from 'src/app/dto/account/account-update-request.dto';
import { PasswordUpdateRequestDto } from 'src/app/dto/account/password-update-request.dto';
import { PasswordUpdateResponseDto } from 'src/app/dto/account/password-update-response.dto';
import { VerificationCodeRequestDto } from 'src/app/dto/account/verification-code-request.dto';
import { VerificationCodeResponseDto } from 'src/app/dto/account/verification-code-response.dto';
import { EmailChangeRequestDto } from 'src/app/dto/account/email-change-request.dto';
import { EmailChangeResponseDto } from 'src/app/dto/account/email-change-response.dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAuthenticatedAccount(): Observable<User> {
    return this.http.get<User>(ACCOUNTPROFILELINK);
  }

  updateCurrentAccountGeneralInfo(
    payload: AccountUpdateRequestDto
  ): Observable<AccountUpdateResponseDto> {
    return this.http.put<AccountUpdateResponseDto>(ACCOUNTPROFILELINK, payload);
  }

  updateCurrentAccountPassword(
    payload: PasswordUpdateRequestDto
  ): Observable<PasswordUpdateResponseDto> {
    return this.http.post<PasswordUpdateResponseDto>(
      PASSWORDUPDATELINK,
      payload
    );
  }

  confirmUpdatingPassword(
    payload: VerificationCodeRequestDto
  ): Observable<VerificationCodeResponseDto> {
    return this.http.put<VerificationCodeResponseDto>(
      PASSWORDVERIFICATIONLINK,
      payload
    );
  }

  updateEmail(
    payload: EmailChangeRequestDto
  ): Observable<EmailChangeResponseDto> {
    return this.http.post<EmailChangeResponseDto>(EMAILUPDATELINK, payload);
  }

  confirmUpdatingEmail(
    payload: VerificationCodeRequestDto
  ): Observable<AccountUpdateResponseDto> {
    return this.http.put<AccountUpdateResponseDto>(
      EMAILVERIFICATIONLINK,
      payload
    );
  }

  updateProrileImage(payload: FormData): Observable<AccountUpdateResponseDto> {
    return this.http.post<AccountUpdateResponseDto>(
      PROFILEIMAGEUPDATELINK,
      payload
    );
  }
}
