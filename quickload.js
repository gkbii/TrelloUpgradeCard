! function() {
    var e, a = {};
    a.exports = e = {}, e.cardActions = ["addAttachmentToCard", "addChecklistToCard", "addMemberToCard", "commentCard", "copyCommentCard", "convertToCardFromCheckItem", "createCard", "copyCard", "deleteAttachmentFromCard", "emailCard", "moveCardFromBoard", "moveCardToBoard", "removeChecklistFromCard", "removeMemberFromCard", "updateCard:idList", "updateCard:closed", "updateCheckItemStateOnCard"].join(","), e.boardActions = [e.cardActions, "addMemberToBoard", "addToOrganizationBoard", "copyBoard", "createBoard", "createList", "deleteCard", "disablePowerUp", "enablePowerUp", "makeAdminOfBoard", "makeNormalMemberOfBoard", "makeObserverOfBoard", "moveListFromBoard", "moveListToBoard", "removeFromOrganizationBoard", "unconfirmedBoardInvitation", "unconfirmedOrganizationInvitation", "updateBoard", "updateList:closed"].join(","), e.memberActions = [e.boardActions, "updateMember"].join(","), e.boardFieldsUnread = ["dateLastActivity", "dateLastView"], e.boardFieldsMinimal = ["name", "closed", "dateLastActivity", "dateLastView", "idOrganization", "prefs", "shortLink", "shortUrl", "url"].join(","), e.boardFieldsFull = [e.boardFieldsMinimal, "desc", "descData", "invitations", "invited", "labelNames", "memberships", "pinned", "powerUps", "subscribed"].join(","), e.boardFieldsMinimalSubscribed = [e.boardFieldsMinimal, "subscribed"].join(","), e.boardFieldsMinimalMemberships = ["name", "closed", "memberships"].join(","), e.memberFields = ["fullName", "initials", "memberType", "username", "avatarHash", "bio", "bioData", "confirmed", "products", "url"].join(","), e.memberFieldsAndPremOrgsAdmin = [e.memberFields, "idPremOrgsAdmin"].join(","), e.memberFieldsStatus = [e.memberFields, "status"].join(","), e.organizationFieldsMinimal = ["name", "displayName", "products", "prefs", "logoHash"].join(","), e.organizationFieldsMinimalMemberships = [e.organizationFieldsMinimal, "memberships"], e.cardFieldsBulk = ["badges", "closed", "dateLastActivity", "desc", "descData", "due", "idAttachmentCover", "idList", "idBoard", "idMembers", "idShort", "labels", "idLabels", "name", "pos", "shortUrl", "shortLink", "subscribed", "url"].join(","), e.boardMinimal = {
        fields: e.boardFieldsMinimal,
        organization: !0,
        organization_fields: e.organizationFieldsMinimal,
        myPermLevel: !0
    }, e.boardsMenuMinimal = {
        boards: "open,starred",
        board_fields: e.boardFieldsMinimal,
        boardStars: !0,
        organizations: "all",
        organization_fields: e.organizationFieldsMinimal,
        board_organization: !0,
        board_organization_fields: e.organizationFieldsMinimal,
        board_myPermLevel: !0
    }, e.boardsMenu = {
        fields: "",
        board_fields: e.boardFieldsMinimal,
        organizations: "all",
        organization_fields: e.organizationFieldsMinimal,
        board_organization: !0,
        board_organization_fields: e.organizationFieldsMinimal,
        paid_account: !0
    }, e.memberUnreadBoards = {
        fields: "",
        boards: "open,starred",
        board_fields: e.boardFieldsUnread
    }, e.boardUnread = {
        fields: e.boardFieldsUnread
    }, e.card = {
        fields: "all",
        stickers: !0,
        attachments: !0
    }, e.cardDetails = {
        actions: e.cardActions,
        action_memberCreator_fields: e.memberFieldsAndPremOrgsAdmin,
        members: !0,
        member_fields: e.memberFieldsStatus,
        attachments: !0,
        fields: "email",
        checklists: "all"
    }, e.cardVoters = {
        fields: "idMembersVoted",
        membersVoted: !0
    }, e.cardCopy = {
        members: !0,
        member_fields: e.memberFieldsStatus,
        attachments: !0,
        stickers: !0,
        fields: "",
        checklists: "all"
    }, e.currentBoardMinimal = {
        lists: "all",
        cards: "visible",
        card_attachments: "cover",
        card_stickers: !0,
        card_fields: e.cardFieldsBulk,
        card_checklists: "none",
        members: "all",
        member_fields: e.memberFieldsStatus,
        membersInvited: "all",
        membersInvited_fields: e.memberFields,
        checklists: "none",
        organization: !0,
        organization_fields: "name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products",
        myPrefs: !0,
        fields: e.boardFieldsFull
    }, e.boardRecentActions = {
        fields: "",
        actions: e.boardActions,
        actions_limit: 50,
        action_memberCreator_fields: e.memberFieldsAndPremOrgsAdmin
    }, e.boardChecklists = {
        fields: "",
        checklists: "none",
        cards: "visible",
        card_fields: "",
        card_checklists: "all",
        labels: "all",
        labels_limit: 1e3
    }, e.memberAccount = {
        tokens: "all",
        sessions: "all",
        credentials: "all",
        paid_account: !0,
        credits: "invitation,promoCode",
        organizations: "all",
        organization_paid_account: !0,
        logins: !0
    }, e.memberPaidAccount = {
        paid_account: !0
    }, e.memberBoards = {
        boards: "open,starred",
        board_fields: e.boardFieldsMinimalSubscribed,
        boardStars: !0,
        boardsInvited: "all",
        boardsInvited_fields: e.boardFieldsMinimalSubscribed,
        board_organization: !0,
        board_organization_fields: e.organizationFieldsMinimal,
        credits: "invitation,promoCode",
        organizations: "all",
        organization_fields: e.organizationFieldsMinimal,
        organizationsInvited: "all",
        organizationsInvited_fields: e.organizationFieldsMinimal,
        paid_account: !0
    }, e.orgMemberCards = {
        board: !0,
        list: !0,
        fields: "badges,closed,due,idAttachmentCover,idList,idBoard,idMembers,idShort,labels,name,url",
        attachments: "true",
        members: "true",
        stickers: "all",
        member_fields: e.memberFields
    }, e.memberCards = {
        boards: "open",
        board_fields: "name,closed,idOrganization,prefs",
        board_lists: "open",
        board_memberships: "me",
        cards: "visible",
        card_fields: e.cardFieldsBulk,
        card_attachments: "true",
        card_stickers: !0,
        card_members: "true",
        card_member_fields: e.memberFields,
        organizations: "all",
        organization_fields: "displayName,name,prefs,products",
        organization_memberships: "me",
        organization_paid_account: !0,
        paid_account: !0
    }, e.memberMinimal = {
        fields: e.memberFields
    }, e.memberProfile = {
        actions: "all",
        actions_limit: 10,
        organizations: "all",
        organization_fields: e.organizationFieldsMinimal,
        organization_paid_account: !0,
        boards: "open",
        board_fields: "name,prefs,idOrganization",
        paid_account: !0
    }, e.memberProfile_daysBack = 30, e.organization = {
        boards: "open",
        board_fields: e.boardFieldsMinimalSubscribed,
        fields: "all",
        members: "all",
        member_fields: e.memberFieldsStatus,
        membersInvited: "all",
        membersInvited_fields: e.memberFields,
        paid_account: !0
    }, e.organizationExports = {
        exports: !0,
        fields: "all",
        paid_account: !0
    }, e.organizationBoardsPage = {
        boards: "open",
        board_fields: e.boardFieldsMinimalSubscribed,
        fields: "all",
        paid_account: !0
    }, e.organizationPaidAccount = {
        paid_account: !0
    }, e.organizationMembers = {
        member_activity: !0,
        boards: "open",
        board_fields: e.boardFieldsMinimalMemberships,
        fields: "all",
        members: "all",
        member_fields: e.memberFieldsStatus,
        membersInvited: "all",
        membersInvited_fields: e.memberFields,
        paid_account: !0
    }, e.organizationMembersMinimal = {
        members: "all",
        fields: e.organizationFieldsMinimalMemberships
    }, e.organizationBoards = {
        boards: "all",
        board_fields: e.boardFieldsMinimalSubscribed,
        fields: ""
    }, e.organizationMinimal = {
        fields: "all"
    }, e.memberHeader = {
        channels: !0,
        notifications: "all",
        notifications_limit: 5,
        notification_memberCreator_fields: e.memberFields,
        organizations: "all",
        organization_paid_account: !0,
        organization_fields: "name,displayName",
        paid_account: !0,
        savedSearches: !0
    }, e.organizations = {
        organizations: "all",
        organization_paid_account: !0
    };
    var i, r, o, d, s, n, t, l, m;
    s = function(e) {
        var a, i;
        if (null != (i = window.JSON) ? !i.parse : !0) return new Function("return " + e)();
        try {
            return window.JSON.parse(e)
        } catch (r) {
            return a = r, null
        }
    },
    i = function(e, a) {
        var i;
        i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), i.open("GET", e, !0), i.onreadystatechange = function() {
            4 === i.readyState && (200 !== i.status ? a(i.responseText) : a(null, s(i.responseText)))
        }, i.send(null)
    },
    d = function(e, a) {
        var i, r, o, d, s, n;
        for (null == a && (a = {}), i = [], r = /invite-token-[-a-f0-9]*=([^;]+)/g; null != (d = null != (n = r.exec(document.cookie)) ? n[1] : void 0);) i.push(unescape(d));
        return i.length > 0 && (a.invitationTokens = i.join(",")), "" + e + "?" + function() {
            var e;
            e = [];
            for (o in a) s = a[o], e.push("" + o + "=" + encodeURIComponent(s));
            return e
        }().join("&")
    },
    t = {},
    m = window,
    o = location,
    n = o.pathname.substr(1),
    r = o.hash,
    r = /^#[^\/]+/.test(r) ? "/" + r.substr(1).replace(/^[\\\/\.]+/g, "") : null,
    l = {
        init: function() {
            l.verifyPushState() && (l.preloads = {}, /token/.test(document.cookie) && (l.preload(d("/1/Members/me", e.memberHeader)), l.preload(l.getDataUrl())))
        },
        verifyPushState: function() {
            var e;
            return e = m.history && m.history.pushState && !/android(\s)*[3-4]\.[0-1][^0-9]/i.test(navigator.userAgent), r && e ? (o.replace(r), !1) : n.length > 1 && !e ? (o.replace("/#" + n), !1) : !0
        },
        getDataUrl: function() {
            var a;
            return r && (n = r), "" === n ? d("/1/Members/me", e.memberBoards) : (a = /^board\/[^\/]+\/([^\/]+)/.exec(n)) ? l.getBoardDataUrl(a[1]) : (a = /^b\/([^\/]+)/.exec(n)) ? l.getBoardDataUrl(a[1]) : (a = /^c\/([^\/]+)/.exec(n)) ? l.getCardDataUrl(a[1]) : !1
        },
        getBoardDataUrl: function(a) {
            return d("/1/Boards/" + a, e.currentBoardMinimal)
        },
        getCardDataUrl: function(a) {
            return d("/1/Cards/" + a, e.card)
        },
        preload: function(e) {
            var a;
            e && (a = {
                isLoading: !0,
                callbacks: [],
                errorCallbacks: []
            }, l.preloads[e] = a, i(e, function(i, r) {
                var o, d, s, n, t, m, c, b;
                if (a.isLoading = !1, i)
                    for (a.errorMessage = i, c = a.errorCallbacks, s = 0, t = c.length; t > s; s++)(d = c[s])(i);
                else {
                    for (a.data = r, b = a.callbacks, n = 0, m = b.length; m > n; n++)(o = b[n])(r);
                    setTimeout(function() {
                        return l.removePreload(e)
                    }, 1e4)
                }
            }))
        },
        removePreload: function(e) {
            return delete l.preloads[e]
        },
        load: function(e, a, i) {
            var r, o;
            r = l.preloads[e], null != r ? r.isLoading ? (r.callbacks.push(a), i && r.errorCallbacks.push(i)) : (null != r.errorMessage || null == r.data ? "function" == typeof i && i(null != (o = r.errorMessage) ? o : "No data on quickload") : a(r.data), l.removePreload(e)) : $.ajax(e, {
                dataType: "json"
            }).success(a).error(function(e) {
                return "function" == typeof i ? i(e.responseText) : void 0
            })
        }
    },
    l.init(),
    a.exports = window.QuickLoad = l.load
}();