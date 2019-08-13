//
//  AccountView.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI
import Safebox

struct AccountView: View {
    
    var account: SafeboxAccountSingle
    
    var body: some View {
   
            VStack(alignment: .leading) {
            Text(account.label)
                .font(.headline)
                .fontWeight(.medium)
                .foregroundColor(Color(red: 1.0, green: 1.0, blue: 1.0, opacity: 0.8))
                .multilineTextAlignment(.leading)
                Text(account.username)
                    .fontWeight(.regular)
                .multilineTextAlignment(.leading)
                if (!(account.hint=="")){
                    Text("Hint: \(account.hint)").font(.footnote)
                    .foregroundColor(Color(red: 1.0, green: 1.0, blue: 1.0, opacity: 0.5))
                    .multilineTextAlignment(.leading)
                }
                
            }
            .padding(.all)
    }
}

#if DEBUG
struct AccountView_Previews: PreviewProvider {
    
    static func  account() -> SafeboxAccountSingle {
        let account = SafeboxAccountSingle()
        account.username = "username454"
        account.label = "Facebook Account"
        account.hint = "Same gmail password"
        return account
    }
    static var previews: some View {
        AccountView(account:account() )
    }
}
#endif
